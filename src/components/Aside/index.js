import { ContainerAside } from './styles.js'

const Aside = ({totals}) => {

  return (
    <ContainerAside>
      <h2>Você receberá:</h2>
      <div className="total">
        <p>Amanhã: <span className="total"> R$ {totals[1]},00</span></p>
        <p>Em 15 dias: <span className="total"> R$ {totals[15]},00</span></p>
        <p>Em 30 dias: <span className="total"> R$ {totals[30]},00</span></p>
        <p>Em 90 dias: <span className="total"> R$ {totals[90]},00</span></p>
      </div>
    </ContainerAside>
  )
}
export default Aside
