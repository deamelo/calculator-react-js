import Api from "../../Api/Index"
import { useState, useEffect } from "react"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from './styles.js'
import Aside from "../Aside/index"


const Calculator = () => {
  const [totals, setTotals] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState("")

  const schema = yup.object().shape({
    amount:yup.number().min(1000, "Valor deve ser maior ou igual a 1000").positive("Informe um valor maior ou igual a 1000").required("Informe o valor da venda que seja maior ou igual a 1000"),
    installments:yup.number().max(12, "Máximo de parcelas permitido é 12").positive("Informe um número maior que 0").required("Informe o número de parcelas"),
    mdr:yup.number().positive("Informe um percentual maior que 0").required("Informe o percentual de MDR")
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
    } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitInput = (data) => {
    setLoading("Aguarde...")
    const input = {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr,
      days: [1, 15, 30, 90]
    }

    Api.post("", input)
    .then((res) => {
      setLoading("")
      setTotals(res.data)
    })
    .catch((err) => {
      setLoading("")
      setError(err.response.data)
      setTimeout(() => {setError("")}, "4000")
    })
  }

  useEffect(() => {

  },[totals] )

  return (
    <Container>
      <h1>Simule sua Antecipação</h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmitInput)}>
          <label>Valor da venda*</label>
          <input className="input"
          placeholder="Valor mínimo de 1000"
          {...register("amount")}
          />
          <span>{errors.amount?.message}</span>
          <label>Número de parcelas*</label>
          <input className="input"
          placeholder="Máximo de 12 parcelas"
          {...register("installments")}
          />
          <span>{errors.installments?.message}</span>
          <label>Percentual de MDR*</label>
          <input className="input"
          placeholder="Digite o percentual de MDR"
          {...register("mdr")}
          />
          <span>{errors.mdr?.message}</span>
          <button type="submit">Calcular</button>
        </form>
        <Aside totals={totals}/>
      </div>
      <span>{loading}</span>
      <span>{error.message}</span>
    </Container>
  )
}
export default Calculator