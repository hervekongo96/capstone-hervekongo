export default function Primarybutton({ value, action, className }) {
    return(
        <button className={className} onClick={action}>
          {value}
        </button>
    )
}