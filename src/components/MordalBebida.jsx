import { Modal,Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const MordalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBebidas()
  
  const mostrarIngredientes = () => {
    let ingredientes = [] 
    for (let i = 1; i < 16; i++) {
      if( receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image 
          src={receta.strDrinkThumb}
          alt={`Imagen receta ${receta.strDrink}`}
        />

        <Modal.Header className="justify-content-center">
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="p-2">
            <h2>Instructions</h2>
            {receta.strInstructions}
            <h2 className="mt-3">Ingredients</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>

      </Modal>
    )
  )
}

export default MordalBebida