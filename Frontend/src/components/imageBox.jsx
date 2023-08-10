import classes from './imageBox.module.css';

const ImageBox = ({ url, altText, btnText }) => {
  return (
    <div className={classes.container}>
      <img src={url} alt={altText} className={classes.image} />
      <button className={classes.btn}>{btnText}</button>
    </div>
  );
};

export default ImageBox;
