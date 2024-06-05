"use strict";
class Paciente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.historicoConsultas = [];
    }
    adicionarConsulta(consulta) {
        this.historicoConsultas.push(consulta);
    }
    listarConsultas() {
        return this.historicoConsultas;
    }
}
class Medico {
    constructor(nome, especialidade) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.consultas = [];
    }
    adicionarConsulta(consulta) {
        this.consultas.push(consulta);
    }
    listarConsultas() {
        return this.consultas;
    }
}
class Tratamento {
    constructor(descricao, custo) {
        this.descricao = descricao;
        this.custo = custo;
    }
}
class Consulta {
    constructor(paciente, medico, data) {
        this.paciente = paciente;
        this.medico = medico;
        this.data = data;
        this.tratamento = null;
    }
    adicionarTratamento(tratamento) {
        this.tratamento = tratamento;
    }
    detalhesConsulta() {
        var _a;
        return `Consulta com Dr. ${this.medico.nome} em ${this.data.toLocaleDateString()} - Tratamento: ${((_a = this.tratamento) === null || _a === void 0 ? void 0 : _a.descricao) || "Nenhum"}`;
    }
}
class Hospital {
    constructor() {
        this.pacientes = [];
        this.medicos = [];
        this.consultas = [];
    }
    adicionarPaciente(paciente) {
        this.pacientes.push(paciente);
    }
    removerPaciente(paciente) {
        const index = this.pacientes.indexOf(paciente);
        if (index === -1) {
            throw new Error(`O paciente ${paciente.nome} não está no hospital.`);
        }
        this.pacientes.splice(index, 1);
    }
    listarPacientes() {
        return this.pacientes;
    }
    adicionarMedico(medico) {
        this.medicos.push(medico);
    }
    removerMedico(medico) {
        const index = this.medicos.indexOf(medico);
        if (index === -1) {
            throw new Error(`O médico ${medico.nome} não está no hospital.`);
        }
        this.medicos.splice(index, 1);
    }
    listarMedicos() {
        return this.medicos;
    }
    criarConsulta(paciente, medico, data) {
        const consulta = new Consulta(paciente, medico, data);
        this.consultas.push(consulta);
        paciente.adicionarConsulta(consulta);
        medico.adicionarConsulta(consulta);
        return consulta;
    }
    listarConsultas() {
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
console.log(consulta1, 'aa');
consulta1.adicionarTratamento(tratamento1);
console.log(paciente1.listarConsultas().map(consulta => consulta.detalhesConsulta()));
console.log(medico1.listarConsultas().map(consulta => consulta.detalhesConsulta()));
