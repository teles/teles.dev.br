import { iconMap } from '../textToIcon/TextToIcon'
import TextToIcon from '../textToIcon/TextToIcon'
import Box from '../box/Box'

interface IconBoxProps {
  title: string;    
  icons: {
    name: keyof typeof iconMap;
    link: string;
  }[]
}

const IconsBox: React.FC<IconBoxProps> = ({ icons, title }) => {
  return (
    <Box className='p-6' centered={true}>
      <h2 className='text-sm font-bold text-gray-600'>{title}</h2>
      <ul className='flex gap-2'>
        {icons.map((icon, index) => (
          <li key={index}>
            <a href={icon.link} target="_blank" className='text-pinkish-500 hover:text-pinkish-600 transition'>
              <TextToIcon icon={icon.name} className='text-2xl' />
            </a>
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default IconsBox