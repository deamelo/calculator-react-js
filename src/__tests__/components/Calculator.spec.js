import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Calculator from  "../../components/Calculator";
import Api from "../../Api"
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(Api)


describe("Calculator component", () => {
	it("should be able to calculator", async () => {

    render(<Calculator/>);

    apiMock.onPost("").replyOnce(200, {})

		const amountField = screen.getByPlaceholderText("Valor mínimo de 1000");
		const installmentsField = screen.getByPlaceholderText("Máximo de 12 parcelas");
    const mdrField = screen.getByPlaceholderText("Digite o percentual de MDR");

		const buttonElement = screen.getByText("Calcular");

		fireEvent.change(amountField, { target: { value: "15000" }})
		fireEvent.change(installmentsField, { target: { value: "3" }})
    fireEvent.change(mdrField, { target: { value: "4" }})

		fireEvent.click(buttonElement)

		await waitFor(() => {
      expect(amountField).toHaveValue("15000");
			expect(installmentsField).toHaveValue("3");
      expect(mdrField).toHaveValue("4");
		})
	})
})