import ImageBox from './imageBox';
import classes from './categorieImges.module.css';

const CategorieImages = () => {
  const imgDetails = [
    {
      url: 'https://thecomfymonkey.com/cdn/shop/products/CP7A7321.jpg-aaa.jpg?v=1676657339&width=535',
      altText: 'Relaxtee',
      btnText: 'Relax Tee',
    },
    {
      url: 'https://thecomfymonkey.com/cdn/shop/products/CP7A7719.jpg?v=1677053865&width=360',
      altText: 'collections',
      btnText: 'Collections',
    },
    {
      url: 'https://thecomfymonkey.com/cdn/shop/files/Untitled-1_f9ab4785-6d48-4919-855a-f97225bd61a3.jpg?v=1689662025&width=535',
      altText: 'oversizeShirts',
      btnText: 'Oversize',
    },
    {
      url: 'https://thecomfymonkey.com/cdn/shop/products/CP7A7290.jpg-a_56579e39-df0a-4566-8ad7-8881d224366d.jpg?v=1677090112&width=360',
      altText: 'premium',
      btnText: 'Premium',
    },
  ];
  return (
    <div className={classes.mainContainer}>
      <div className={classes.sectionHeader}>
        <h2>Shop by Category</h2>
      </div>

      <div className={classes['flex-container']}>
        {imgDetails.map((imgDetail) => {
          return (
            <ImageBox
              key={imgDetail.altText}
              url={imgDetail.url}
              altText={imgDetail.altText}
              btnText={imgDetail.btnText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategorieImages;
