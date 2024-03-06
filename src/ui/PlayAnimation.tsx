export default function PlayAnimation({ visible = false }) {
  if (!visible) {
    return null;
  }
  return (
    <div className='absolute top-2 left-2 '>
      <div className='play-animation-container '>
        <span className='play-animation-bar n1'></span>
        <span className='play-animation-bar n2'></span>
        <span className='play-animation-bar n3'></span>
      </div>
    </div>
  );
}
