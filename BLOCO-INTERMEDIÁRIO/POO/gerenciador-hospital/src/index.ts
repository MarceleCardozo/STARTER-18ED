class Paciente {
    private historicoConsultas: Consulta[] = [];

    constructor(public nome: string, public idade: number) {}

    adicionarConsulta(consulta: Consulta): void {
        this.historicoConsultas.push(consulta);
    }

    listarConsultas(): Consulta[] {
        return this.historicoConsultas;
    }
}

class Medico {
    private consultas: Consulta[] = [];

    constructor(public nome: string, public especialidade: string) {}

    adicionarConsulta(consulta: Consulta): void {
        this.consultas.push(consulta);
    }

    listarConsultas(): Consulta[] {
        return this.consultas;
    }
}

class Tratamento {
    constructor(public descricao: string, public custo: number) {}
}

class Consulta {
    private tratamento: Tratamento | null = null;

    constructor(
        public paciente: Paciente,
        public medico: Medico,
        public data: Date
    ) {}

    adicionarTratamento(tratamento: Tratamento): void {
        this.tratamento = tratamento;
    }

    detalhesConsulta(): string {
        return `Consulta com Dr. ${this.medico.nome} em ${this.data.toLocaleDateString()} - Tratamento: ${this.tratamento?.descricao || "Nenhum"}`;
    }
}

class Hospital {
    private pacientes: Paciente[] = [];
    private medicos: Medico[] = [];
    private consultas: Consulta[] = [];

    adicionarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
    }

    removerPaciente(paciente: Paciente): void {
        const index = this.pacientes.indexOf(paciente);
        if (index === -1) {
            throw new Error(`O paciente ${paciente.nome} não está no hospital.`);
        }
        this.pacientes.splice(index, 1);
    }

    listarPacientes(): Paciente[] {
        return this.pacientes;
    }

    adicionarMedico(medico: Medico): void {
        this.medicos.push(medico);
    }

    removerMedico(medico: Medico): void {
        const index = this.medicos.indexOf(medico);
        if (index === -1) {
            throw new Error(`O médico ${medico.nome} não está no hospital.`);
        }
        this.medicos.splice(index, 1);
    }

    listarMedicos(): Medico[] {
        return this.medicos;
    }

    criarConsulta(paciente: Paciente, medico: Medico, data: Date): Consulta {
        const consulta = new Consulta(paciente, medico, data);
        this.consultas.push(consulta);
        paciente.adicionarConsulta(consulta);
        medico.adicionarConsulta(consulta);
        return consulta;
    }

    listarConsultas(): Consulta[] {
        return this.consultas;
    }
}

// Demonstração de uso
const hospital = new Hospital();
const paciente1 = new Paciente("Carlos", 45);
const medico1 = new Medico("Dr. Silva", "Cardiologista");

hospital.adicionarPaciente(paciente1);
hospital.adicionarMedico(medico1);

const consulta1 = hospital.criarConsulta(paciente1, medico1, new Date());
const tratamento1 = new Tratamento("Tratamento para hipertensão", 1500);

consulta1.adicionarTratamento(tratamento1);

console.log(paciente1.listarConsultas().map(consulta => consulta.detalhesConsulta()));
console.log(medico1.listarConsultas().map(consulta => consulta.detalhesConsulta()));
