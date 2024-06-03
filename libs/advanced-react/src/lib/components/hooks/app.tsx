import { BasicFormWrapperWithUser } from '../higherOrderComponent'
import { BasicForm } from '../shared'

const App = () => {

    const CoreBasicForm = BasicFormWrapperWithUser(BasicForm)

    return (<CoreBasicForm />)
}

export default App