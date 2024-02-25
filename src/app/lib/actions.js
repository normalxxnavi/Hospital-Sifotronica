'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/app/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "Registro correcto" }
}


// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);
    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials', { email, password, redirectTo: '/dashboard' })
        // return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}


// LOGIN google
export async function loginGoogle() {
    try {
        // await signIn('google', { redirectTo: '/dashboard' })
        await signIn('google', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: '/dashboard' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: '/dashboard' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function loginGitLab() {
    try {
        await signIn('gitlab', { redirectTo: '/dashboard' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}

async function getMedicosIds() {
    const medicosIds = await prisma.medico.findMany({
        select: { id: true }
    })
    return medicosIds.map(medico => medico.id)
}

export async function getPaciente(id) {  
    try {
        const pacientes = await prisma.paciente.findUnique({
            where: { id },
            include: { medico: true  }
        })

        console.log(pacientes);
        return pacientes;
    } catch (error) {
      // console.log(error);  
        return null;
    }
}

export async function getMedico(id) {  
    try {
        const medicos = await prisma.medico.findUnique({
            where: { id },
            include: { paciente: true  }
        })

        console.log(medicos);
        return medicos;
    } catch (error) {
      // console.log(error);  
        return null;
    }
}

export async function getMedicos() {
    try {
        const medicos = await prisma.medico.findMany()
        return medicos;
    } catch (error) {
        console.log(error);  
        return null
    }
}

export async function newMedico(formData) {
    try {
        const nombre = formData.get('nombre')
        const edad = Number( formData.get('edad')) 
        const telefono = formData.get('telefono')
        const especialidad = formData.get('especialidad') 

        const medico = await prisma.medico.create({
            data: { nombre, edad, telefono, especialidad },
        })

        console.log(medico);
        revalidatePath('/medicos')
    } catch (error) {
        console.log(error);
    }
    redirect('/medicos');
}

export async function editMedico(formData) {
    const id = Number(formData.get('id'));
    const nombre = formData.get('nombre');
    const edad = Number(formData.get('edad'));
    const telefono = formData.get('telefono');
    const especialidad = formData.get('especialidad');

    try {
        const medico = await prisma.medico.update({
            where: { id },
            data: { nombre, edad, telefono, especialidad },
        });
        console.log(medico);
        // Redirecciona después de editar el médico
        revalidatePath("/medicos")
    } catch (error) {
        console.error('Error al editar médico:', error);
        throw error; // Propaga el error para manejarlo en el contexto adecuado
    }
    redirect("/medicos")
}

export async function deleteMedico(formData) {
    try {
        const id = Number(formData.get('id'));

        const medico = await prisma.medico.delete({
            where: { id },
        });
        console.log(medico);
        // Redirecciona después de eliminar el médico
        revalidatePath("/medicos")
    } catch (error) {
        console.error('Error al eliminar médico:', error);
        throw error; // Propaga el error para manejarlo en el contexto adecuado
    }
    redirect("/medicos")
}

export async function getPacientes() {
    try {
        const pacientes = await prisma.paciente.findMany()
        return pacientes;
    } catch (error) {
        console.log(error);  
        return null
    }
}

export async function newPaciente(formData) {
    try {
        const nombre = formData.get('nombre')
        const telefono = formData.get('telefono') 
        const fechaNacimiento = new Date( formData.get('fechaNacimiento')).toISOString()
        const dni = formData.get('dni')
        const medicoId = Number(formData.get('medicoId'));

        const paciente = await prisma.paciente.create({
            data: { nombre, telefono, fechaNacimiento, dni, medicoId },
        })

        console.log(paciente);
        revalidatePath('/pacientes')
    } catch (error) {
        console.log(error);
    }
    redirect('/pacientes');
}

export async function editPaciente(formData) {
    const id = Number(formData.get('id'));
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono') 
    const fechaNacimiento = new Date( formData.get('fechaNacimiento')).toISOString()
    const dni = formData.get('dni')
    const medicoId = Number(formData.get('medicoId'));

    try {
        const medico = await prisma.medico.update({
            where: { id },
            data: { nombre, telefono, fechaNacimiento, dni, medicoId },
        });
        console.log(medico);
        // Redirecciona después de editar el médico
        revalidatePath("/pacientes")
    } catch (error) {
        console.error('Error al editar médico:', error);
        throw error; // Propaga el error para manejarlo en el contexto adecuado
    }
    redirect("/pacientes")
}

export async function deletePaciente(formData) {
    try {
        const id = Number(formData.get('id'));

        const paciente = await prisma.paciente.delete({
            where: { id },
        });
        console.log(paciente);
        // Redirecciona después de eliminar el médico
        revalidatePath("/pacientes")
    } catch (error) {
        console.error('Error al eliminar médico:', error);
        throw error; // Propaga el error para manejarlo en el contexto adecuado
    }
    redirect("/pacientes")
}