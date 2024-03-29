import { useState } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })

  const [alerta, setAlerta] = useState('')
  const { categorias } = useCategorias()
  const { consultarBebida } = useBebidas()

  const handleSubmit = e => {
    e.preventDefault()
    if(Object.values(busqueda).includes('')) {
      setAlerta('All fields are required')
      return
    }
    setAlerta('')
    consultarBebida(busqueda)
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="ms-1" htmlFor="nombre">Liquor Name</Form.Label>

            <Form.Control 
              id="nombre"
              type="text"
              placeholder="Ex: Tequila, Vodka, etc"
              name="nombre"
              value={busqueda.nombre}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name] : e.target.value
              })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="ms-1" htmlFor="categoria">Beverage Category</Form.Label>

            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name] : e.target.value
              })}
            >
              <option>- Select Category -</option>
              {categorias.map(categoria => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >{categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button 
            variant="secondary"
            className="text-uppercase w-100"
            type="submit"
          >
            Search Drinks
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario