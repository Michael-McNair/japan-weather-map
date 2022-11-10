export default function SlideButton(props: { onClick: any; content: string }) {
  return (
    <button className="slide" onClick={props.onClick}>
      {props.content}
    </button>
  );
}
