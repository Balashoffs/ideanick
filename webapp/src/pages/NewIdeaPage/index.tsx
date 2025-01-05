import { useFormik } from 'formik'
import { Segment } from '../../components/Segment'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { withZodSchema } from 'formik-validator-zod'
import { zCreateIdeaTrpcInput } from '@ideanick/backend/src/router/createIdea/input'
import { trpc } from '../../lib/trpc'

export const NewIdeaPage = () => {
  const createIdea = trpc.createIdea.useMutation()
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: withZodSchema(
      zCreateIdeaTrpcInput,
    ),
    onSubmit: async (values) => {
      return await createIdea.mutateAsync(values)
    },
  })

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <Input name="name" label="Name" formik={formik}></Input>
        <Input name="nick" label="Nick" formik={formik}></Input>
        <Input name="description" label="Description" formik={formik}></Input>
        <TextArea name="text" label="Text" formik={formik}></TextArea>
        {!formik.isValid && !!formik.submitCount && <div style={{ color: 'red' }}> Some fields are invalid</div>}
        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  )
}