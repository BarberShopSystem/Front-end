import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceModal.css';

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
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
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

      try {
        const response = await fetch('http://localhost:3000/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
            handleClose();
          }, 2000);
        } else {
          console.error('Erro ao enviar dados para o backend');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }
  };

  const validateForm = () => {
    return selectedProfissional && horario && regiao && data && servico && nome && telefone;
  };

  return (
    <Modal show={show} onHide={handleClose} className="modal-custom">
      <Modal.Header closeButton>
        <Modal.Title>Agendar Serviço</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formSubmitted ? (
          <div className="alert alert-success" role="alert">
            Serviço agendado com sucesso!
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProfissional">
              <Form.Label>Selecionar Profissional</Form.Label>
              <Form.Control
                as="select"
                value={selectedProfissional || ''}
                onChange={e => setSelectedProfissional(Number(e.target.value))}
                required
              >
                <option value="" disabled>Escolha um profissional</option>
                {profissionais.map(prof => (
                  <option key={prof.id} value={prof.id}>{prof.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formHorario">
              <Form.Label>Horário</Form.Label>
              <Form.Control type="time" value={horario} onChange={e => setHorario(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formRegiao">
              <Form.Label>Região do Serviço</Form.Label>
              <Form.Control type="text" value={regiao} onChange={e => setRegiao(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formData">
              <Form.Label>Data</Form.Label>
              <DatePicker selected={data} onChange={date => setData(date)} className="form-control" required />
            </Form.Group>
            <Form.Group controlId="formServico">
              <Form.Label>Serviço</Form.Label>
              <Form.Control as="select" value={servico} onChange={e => setServico(e.target.value)} required>
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
              <Form.Control type="text" value={nome} onChange={e => setNome(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">Agendar</Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ServicoModal;
