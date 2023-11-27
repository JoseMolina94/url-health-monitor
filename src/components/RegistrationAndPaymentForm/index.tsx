import React, {FC, useState} from "react";
import { UrlPlan } from "../../interfaces/urlPlans";
import { OptionSelect } from "../Commons/OptionSelect/index";
import { Input } from "../Commons/Input/index";

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
    cardPartner: "visa",
    cvv: "",
    payment: selectedPlan?.price || 0,
    planId: selectedPlan?.id
  }
  const errorInitialValues = {
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    cardNumber: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    userId: "",
    cardPartner: "",
    cvv: ""
  }
  const [formState, setFormState] = useState(initialValues)
  const [errorCtrl, setErrorCtrl] = useState<any>(null)
  const partnersOptions = [
    { label: "VISA", value: "visa" },
    { label: "MasterCard", value: "mastercard" }
  ]
  const isPurchasing = selectedPlan?.price > 0

  const onChangeFunc = ({name, value}) => {
    let currentValues = formState
    currentValues[name] = value

    setFormState({...currentValues})
  }

  const validate = () => {
    const emailRegexValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let error = errorInitialValues
    let haveError = false

    if (!formState?.firstName) {
      error.firstName = "The first name is required"
      haveError = true
    }
    if (!formState?.lastName) {
      error.lastName = "The last name is required"
      haveError = true
    }
    if (!formState?.birthday) {
      error.birthday = "The birthday is required"
      haveError = true
    }
    if (!formState?.email || !emailRegexValidator.test(formState?.email)) {
      error.email = "You must register an e-mail address"
      haveError = true
    }
    if (isPurchasing) {
      if (!formState?.cardNumber) {
        error.cardNumber = "You must register a credit card number"
        haveError = true
      }
      if (formState?.cardNumber) {
        if (formState?.cardNumber.length < 16) {
          error.cardNumber = "The card number is too short"
        }
        else if (formState?.cardNumber.length > 16) {
          error.cardNumber = "The card number is too long"
        }
        haveError = true
      }
      if (!formState?.cardPartner) {
        error.cardPartner = "You must register a credit card partner"
        haveError = true
      }
      if (!formState?.userId) {
        error.userId = "You must register a credit card owner Id"
        haveError = true
      }
      if (!formState?.cvv || formState?.cvv.length > 3) {
        error.cvv = "You must register the credit card CVV code"
        haveError = true
      }
      if (!formState?.cardExpirationMonth) {
        error.cardExpirationMonth = "You must register de credit card expiration month"
        haveError = true
      }
      if (!formState?.cardExpirationYear) {
        error.cardExpirationYear = "You must register de credit card expiration year"
        haveError = true
      }

      if (formState?.cardExpirationMonth && formState?.cardExpirationMonth.length > 2) {
        error.cardExpirationMonth = "Please especific the month in number, e.g: 02 (Feb)"
        haveError = true
      }
      if (!formState?.cardExpirationYear && formState?.cardExpirationYear.length > 2) {
        error.cardExpirationYear = "Only the last two digits are required"
        haveError = true
      }
    }

    setErrorCtrl(error)
    return haveError
  }

  const onSubmit = () => {
    if (!validate()) {
      alert("Send!, see the console...")
      console.log("FORM", formState)
      setFormState(initialValues)
    }
  }

  return (
    <div className="w-full py-10 px-10">
      <div className="form-body form-border py-4">

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
            error={errorCtrl?.firstName}
          />
          <Input
            required
            name="lastName"
            value={formState?.lastName}
            onChangeFunc={onChangeFunc}
            label="Last Name"
            error={errorCtrl?.lastName}
          />
        </div>

        <div className="email-birthday-section">
          <Input
            required
            name="email"
            value={formState?.email}
            onChangeFunc={onChangeFunc}
            label="E-Mail"
            error={errorCtrl?.email}
          />

          <Input
            required
            type="date"
            name="birthday"
            value={formState?.birthday}
            onChangeFunc={onChangeFunc}
            label="Birthday"
            error={errorCtrl?.birthday}
          />
        </div>

        {
          isPurchasing &&
            <div className="form-body">
              <div className="form-title mt-6">
                <h3>
                  Credit Card Information
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
                  error={errorCtrl?.cardPartner}
                />

                <Input
                  required
                  name="cardNumber"
                  value={formState?.cardNumber}
                  onChangeFunc={onChangeFunc}
                  label="Credit Card Number"
                  error={errorCtrl?.cardNumber}
                />

                <Input
                  required
                  name="cvv"
                  value={formState?.cvv}
                  onChangeFunc={onChangeFunc}
                  label="CVV"
                  error={errorCtrl?.cvv}
                />
              </div>

              <div className="auth-card-info">
                <Input
                  required
                  name="userId"
                  value={formState?.userId}
                  onChangeFunc={onChangeFunc}
                  label="Owner ID"
                  error={errorCtrl?.userId}
                />

                <div className="card-expiration-info">
                  <Input
                    required
                    name="cardExpirationMonth"
                    value={formState?.cardExpirationMonth}
                    onChangeFunc={onChangeFunc}
                    label="Expiration Month"
                    error={errorCtrl?.cardExpirationMonth}
                  />

                  <Input
                    required
                    name="cardExpirationYear"
                    value={formState?.cardExpirationYear}
                    onChangeFunc={onChangeFunc}
                    label="Expiration Year"
                    error={errorCtrl?.cardExpirationYear}
                  />
                </div>
              </div>
            </div>
        }


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

          <button
            className="btn-purchase-plan"
            onClick={onSubmit}
          >
            {selectedPlan?.price > 0 ? "Purchase" : "Registry"}
          </button>
        </div>

      </div>
    </div>
  )
}
