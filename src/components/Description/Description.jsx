import css from "./Description.module.css"

const Description = ({title, content}) => {
  return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	)
}

export default Description
