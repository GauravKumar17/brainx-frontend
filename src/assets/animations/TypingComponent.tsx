import { TypeAnimation } from 'react-type-animation';

interface Props{
    para: string;

}

export default function TypingComponent(props : Props) {
  return (
    <TypeAnimation
      sequence={[
        props.para,1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '25px', display: 'flex-col' }}
      repeat={Infinity}
      omitDeletionAnimation={true}
    />
  );
}
