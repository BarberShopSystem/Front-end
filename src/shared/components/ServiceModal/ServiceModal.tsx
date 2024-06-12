import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type Profissional = {
  id: number;
  nome: string;
};

type ModalProps = {
  show: boolean;
  handleClose: () => void;
  profissionais: Profissional[];
};

const ServicoModal: React.FC<ModalProps> = ({ show, handleClose, profissionais }) => {
  const [selectedProfissional, setSelectedProfissional] = useState<number | null>(null);
  const [horario, setHorario] = useState<string>('');
  const [regiao, setRegiao] = useState<string>('');
  const [data, setData] = useState<Date | null>(new Date());
  const [servico, setServico] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      selectedProfissional,
      horario,
      regiao,
      data,
      servico,
      nome,
      telefone
    };
    console.log('Form Data:', formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agendar Serviço</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProfissional">
            <Form.Label>Selecionar Profissional</Form.Label>
            <Form.Control as="select" value={selectedProfissional || ''} onChange={e => setSelectedProfissional(Number(e.target.value))}>
              <option value="" disabled>Escolha um profissional</option>
              {profissionais.map(prof => (
                <option key={prof.id} value={prof.id}>{prof.nome}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formHorario">
            <Form.Label>Horário</Form.Label>
            <Form.Control type="time" value={horario} onChange={e => setHorario(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formRegiao">
            <Form.Label>Região do Serviço</Form.Label>
            <Form.Control type="text" value={regiao} onChange={e => setRegiao(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formData">
            <Form.Label>Data</Form.Label>
            <DatePicker selected={data} onChange={date => setData(date)} className="form-control" />
          </Form.Group>
          <Form.Group controlId="formServico">
            <Form.Label>Serviço</Form.Label>
            <Form.Control as="select" value={servico} onChange={e => setServico(e.target.value)}>
              <option value="" disabled>Escolha um serviço</option>
              <option value="corte1">Corte 1</option>
              <option value="corte2">Corte 2</option>
              <option value="corte3">Corte 3</option>
              <option value="barba">Barba</option>
              <option value="bigode">Bigode</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" value={nome} onChange={e => setNome(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">Agendar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ServicoModal;
