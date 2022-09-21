import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from '../Shared/Button';
import { useEvent } from '../../contexts/EventContext';
import { useHistory } from 'react-router-dom';

import {
  Container,
  FormTitle,
  FormRow,
  InputField,
  FormError
} from './styles'

export const Create = () => {
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [, { updateEvent }] = useEvent();

  const onSubmit = (data) => {
    updateEvent(data)
    history.push('/event');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create event</FormTitle>
        <FormRow>
          <label>
            Event name
            <FormError>{errors.event_name?.message}</FormError>
          </label>
          <InputField type="text"
            {...register("event_name", { required: `required` })}
          />
        </FormRow>

        <FormRow>
          <label>
            Host name
            <FormError>{errors.host_name?.message}</FormError>
          </label>
          <InputField type="text"
            {...register("host_name", { required: `required` })}
          />
        </FormRow>

        <FormRow>
          <label>
            Start date/time
            <FormError>{errors.start_time?.message}</FormError>
          </label>
          <InputField type="text"
            {...register("start_time", { required: `required` })}
          />
        </FormRow>

        <FormRow>
          <label>
            End date/time
            <FormError>{errors.end_time?.message}</FormError>
          </label>
          <InputField type="text"
            {...register("end_time", { required: `required` })}
          />
        </FormRow>
        <FormRow>
          <label>
            Location 
            <FormError>{errors.location?.message}</FormError>
          </label>
          <InputField type="text"
            {...register("location", { required: `required` })}
          />
        </FormRow>

        <FormRow>
          <label>
            Event photo
          </label>
          <InputField type="file"
            {...register("photo")}
          />
        </FormRow>

        <Button type="submit" width="100%"> Next </Button>
      </form>
    </Container>
  )
}