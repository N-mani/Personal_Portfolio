import { Typewriter } from 'react-simple-typewriter'

const Typewriter1 = () => {
  return (
    <div>
      <Typewriter
        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  )
}

export default Typewriter1
