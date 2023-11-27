import React, {FC, useState} from "react";
import { UrlPlan } from "../../interfaces/urlPlans";
import { OptionSelect } from "../Commons/OptionSelect/index";
import { Input } from "../Commons/Input/index";
import { PlanTableDetails } from "../PlanTableDetails/index";

import './styles.css'
import {PlanCard} from "../PlanCard/index";

interface RegistrationAndPaymentFormProps {
  selectedPlan: UrlPlan
}

export const RegistrationAndPaymentForm: FC<RegistrationAndPaymentFormProps> = (props) => {
  const {
    selectedPlan
  } = props
  const initialValues = {
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    cardNumber: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    userId: "",
    cardPartner: "",
    cvv: "",
    payment: selectedPlan?.price || 0,
    planId: selectedPlan?.id
  }
  const [formState, setFormState] = useState(initialValues)
  const partnersOptions = [
    { label: "VISA", value: "visa" },
    { label: "MasterCard", value: "mastercard" }
  ]

  const onChangeFunc = ({name, value}) => {
    let currentValues = formState
    currentValues[name] = value

    setFormState({...currentValues})
  }

  return (
    <div className="w-full py-10 px-10" id="form">
      <div className="form-body py-4">

        <div className="form-title under-line">
          <h2>
            Register
          </h2>
        </div>

        <div className="form-title">
          <h3>
            User Information
          </h3>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2" >
          <Input
            required
            name="firstName"
            value={formState?.firstName}
            onChangeFunc={onChangeFunc}
            label="First Name"
          />
          <Input
            required
            name="lastName"
            value={formState?.lastName}
            onChangeFunc={onChangeFunc}
            label="Last Name"
          />
        </div>

        <div className="email-birthday-section">
          <Input
            required
            name="email"
            value={formState?.email}
            onChangeFunc={onChangeFunc}
            label="E-Mail"
          />

          <Input
            required
            type="date"
            name="birthday"
            value={formState?.birthday}
            onChangeFunc={onChangeFunc}
            label="Birthday"
          />
        </div>

        <div className="form-title mt-6">
          <h3>
            User Information
          </h3>
        </div>

        <div className="basic-card-info">
          <OptionSelect
          name="cardPartner"
          value={formState?.cardPartner}
          onChangeFunc={onChangeFunc}
          label="Credit Card Partner"
          required
          options={partnersOptions}
          />

          <Input
            required
            name="cardNumber"
            value={formState?.cardNumber}
            onChangeFunc={onChangeFunc}
            label="Credit Card Number"
          />

          <Input
            required
            name="cvv"
            value={formState?.cvv}
            onChangeFunc={onChangeFunc}
            label="CVV"
          />
        </div>

        <div className="auth-card-info">
          <Input
            required
            name="userId"
            value={formState?.userId}
            onChangeFunc={onChangeFunc}
            label="Owner ID"
          />

          <div className="card-expiration-info">
            <Input
              required
              name="cardMonthExpired"
              value={formState?.cardExpirationMonth}
              onChangeFunc={onChangeFunc}
              label="Expiration Month"
            />

            <Input
              required
              name="cardYearExpired"
              value={formState?.cardExpirationYear}
              onChangeFunc={onChangeFunc}
              label="Expiration Year"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="font-extrabold text-lg text-red-600">
            {selectedPlan?.price > 0 ? "You are purchase:" : "You are registering:"}
          </p>

          <div className="mt-10">
            <PlanCard
              plan={selectedPlan}
              withoutChooseButton
            />
          </div>

          <button className="btn-purchase-plan">
            {selectedPlan?.price > 0 ? "Purchase" : "Registry"}
          </button>
        </div>

      </div>
    </div>
  )
}
