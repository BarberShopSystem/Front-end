import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Alert,
  InputAdornment
} from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import './ServiceModal.css';
import InputMask from 'react-input-mask';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DatePicker } from '@mui/x-date-pickers';
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
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedProfissional, setSelectedProfissional] = useState<string>('');
  const [horario, setHorario] = useState<string>('');
  const [regiao, setRegiao] = useState<string>('');
  const [data, setData] = useState<Date | null>(new Date());
  const [servico, setServico] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        selectedProfissional: Number(selectedProfissional),
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
    <Modal open={show} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2
        }}
      >
        <Typography sx={{ color: '#CAB392', fontWeight: 800, fontSize: 38 }} variant="h5" component="h2" align="center" gutterBottom>
          FAÇA SEU AGENDAMENTO
        </Typography>
        {formSubmitted ? (
          <Alert severity="success">Serviço agendado com sucesso!</Alert>
        ) : (
          <>
          </>
        )}
        {formSubmitted ? (
          <Alert severity="success">Serviço agendado com sucesso!</Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',
                      }}
                    >A REGIÃO PARA O SERVIÇO</InputLabel>

                    <TextField
                      fullWidth
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={regiao}
                      onChange={e => setRegiao(e.target.value)}
                      required

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',
                        mb: 2
                      }}
                    >
                      Selecione uma data
                    </InputLabel>
                    <DatePicker sx={{
                      width: '100%'
                    }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',
                      }}
                    >
                      Selecione um serviço
                    </InputLabel>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Serviço</InputLabel>
                      <Select
                        value={servico}
                        onChange={e => setServico(e.target.value)}
                        required
                        variant="outlined"
                      >
                        <MenuItem value="" disabled>Escolha um serviço</MenuItem>
                        <MenuItem value="corte1">Corte 1</MenuItem>
                        <MenuItem value="corte2">Corte 2</MenuItem>
                        <MenuItem value="corte3">Corte 3</MenuItem>
                        <MenuItem value="barba">Barba</MenuItem>
                        <MenuItem value="bigode">Bigode</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        sx={{
                          background: '#DEC7A6',
                          color: '#000',
                          fontWeight: 800,
                          borderRadius: 0,
                          "&:hover": {
                            background: '#DEC7A6',
                            color: '#000',
                            filter: 'brightness(0.9)'
                          }
                        }}
                        size='large'
                      >
                        Continuar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

            )}
            {activeStep === 1 && (
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',

                      }}
                    >
                      Selecione o profissional
                    </InputLabel>
                    <FormControl fullWidth margin="normal">

                      <Select
                        value={selectedProfissional}
                        variant="outlined"
                        onChange={e => setSelectedProfissional(e.target.value)}
                        required
                      >
                        <MenuItem value="" disabled>Escolha um profissional</MenuItem>
                        {profissionais.map(prof => (
                          <MenuItem key={prof.id} value={prof.id.toString()}>{prof.nome}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',

                      }}
                    >
                      Escolha um horário
                    </InputLabel>
                    <TextField
                      fullWidth
                      margin="normal"

                      variant="outlined"
                      type="time"
                      value={horario}
                      onChange={e => setHorario(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleBack}
                        sx={{
                          background: '#DEC7A6',
                          color: '#000',
                          fontWeight: 800,
                          borderRadius: 0,
                          "&:hover": {
                            background: '#DEC7A6',
                            color: '#000',
                            filter: 'brightness(0.9)'
                          }
                        }}
                        size='large'
                      >
                        Voltar
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        sx={{
                          background: '#DEC7A6',
                          color: '#000',
                          fontWeight: 800,
                          borderRadius: 0,
                          "&:hover": {
                            background: '#DEC7A6',
                            color: '#000',
                            filter: 'brightness(0.9)'
                          }
                        }}
                        size='large'

                      >
                        Continuar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
            {activeStep === 2 && (
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',

                      }}
                    >
                      informe seu nome
                    </InputLabel>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Nome"
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      required
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel
                      sx={{
                        textTransform: 'uppercase',
                        color: '#000',
                        fontWeight: 'bold',
                      }}
                    >
                      informe seu telefone
                    </InputLabel>
                    <InputMask
                      mask="(99) 99999-9999"
                      value={telefone}
                      onChange={e => setTelefone(e.target.value)}
                    >
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          fullWidth
                          margin="normal"
                          label="Telefone"
                          type="tel"
                          required
                          variant="outlined"
                        />
                      )}
                    </InputMask>

                  </Grid>






                  <Grid item xs={12}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleBack}
                        sx={{
                          background: '#DEC7A6',
                          color: '#000',
                          fontWeight: 800,
                          borderRadius: 0,
                          "&:hover": {
                            background: '#DEC7A6',
                            color: '#000',
                            filter: 'brightness(0.9)'
                          }
                        }}
                        size='large'
                      >
                        Voltar
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                          background: '#DEC7A6',
                          color: '#000',
                          fontWeight: 800,
                          borderRadius: 0,
                          "&:hover": {
                            background: '#DEC7A6',
                            color: '#000',
                            filter: 'brightness(0.9)'
                          }
                        }}
                        size='large'
                      >
                        Confirmar Reserva
                      </Button>

                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
          </form>
        )}
      </Box>
    </Modal >
  );
};

export default ServicoModal;
