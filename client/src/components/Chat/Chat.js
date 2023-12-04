import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Hey Learner!',
      trigger: '1',
  }, {
      id: '1',
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: '4'
  }, {
      id: '4',
      options: [
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },
      ],
      end: true
  }
];


// Creating our own theme
const theme = {
  background: '#FFFFFF',
  headerBgColor: '#0F3789',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FFFFFF  ',
  userFontColor: '#0F3789',
};
 
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="SkillVista"
          steps={steps}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;