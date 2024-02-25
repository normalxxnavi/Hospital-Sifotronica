import { getMedicos, getPaciente } from '@/app/lib/actions'

async function ListaMedicos({ pacienteId, disabled }) {

    const medicos = await getMedicos()

    let paciente = null;
    let medicoId = null;
    if (pacienteId) {
        paciente = await getPaciente(pacienteId)
        medicoId = paciente.medicoId;
    }

    console.log(`MEDICO del PACIENTES ${pacienteId}: `, medicoId);

    return (
        <fieldset disabled={disabled}>
            <legend>Pacientes</legend>
            {medicos?.map((medico) => (
                <div key={medico.id}>
                    <p>
                        {medicoId == medico.id
                            ? <input type='radio' name='medicoId' value={medico.id} defaultChecked />
                            : <input type='radio' name='medicoId' value={medico.id} />
                        }
                        {medico.nombre}
                    </p>
                </div>
            ))}
        </fieldset>
    )
}

export default ListaMedicos