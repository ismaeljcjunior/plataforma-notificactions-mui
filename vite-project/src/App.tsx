
import { ThemeProvider } from '@material-ui/styles'
import { PageBells } from './pages/pageBells/PageBells'
import { ThemeBase } from './theme/ThemeBase'


export const App = () => {


  return (
    <ThemeProvider theme={ThemeBase} >
      <PageBells />
    </ThemeProvider>


  )
}

