import { Field, Form } from "react-final-form";
import { DefaultSelect } from "shared/ui/Select/DefaultSelect/DefaultSelect";
import styled from "styled-components";
import { initialFormValues } from "./lib/initialFormValues";

export const LogbookFilters = () => {
  const onSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialFormValues}
      render={({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            name="brand"
            render={({ input }) => (
              <DefaultSelect
                placeholder="Выбрать марку"
                defaultValue={input.value}
                inputValue={input.value}
                options={[]}
              />
            )}
          />
          <Field
            name="model"
            render={() => (
              <DefaultSelect placeholder="Выбрать модель" options={[]} />
            )}
          />
          <Field
            name="generation"
            render={() => (
              <DefaultSelect placeholder="Выбрать поколение" options={[]} />
            )}
          />
          <Field
            name="theme"
            render={() => (
              <DefaultSelect placeholder="Выбрать тему" options={[]} />
            )}
          />
        </StyledForm>
      )}
    />
  );
};

const StyledForm = styled.form`
  margin-top: 10px;

  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;
