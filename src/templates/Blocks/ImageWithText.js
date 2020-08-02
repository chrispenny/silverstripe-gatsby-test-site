import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

const ImageWithText = (props) => {
  const baseElement = props.DNADesignBaseElement;
  const imageWithText = props.AppImageWithTextBlock;

  const title = baseElement.title;
  const showTitle = baseElement.showTitle;

  const content = imageWithText.content;
  const headingStyle = imageWithText.headingStyle;
  const imageAlignment = imageWithText.imageAlignment;

  const image = imageWithText.Image;
  const imageLink = image.link;
  const imageTitle = image.SilverStripeFile.title;

  return (
    <div>
      { showTitle
        ? <h2>{title} {headingStyle} {imageAlignment}</h2>
        : null }

      <img src={`http://gatsby.backend/${imageLink}`} alt={imageTitle} />

      <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
  )
};

ImageWithText.defaultProps = {};

ImageWithText.propTypes = {
  uuid: PropTypes.string,
  className: PropTypes.string,
  DNADesignBaseElement: PropTypes.shape({
    title: PropTypes.string,
    showTitle: PropTypes.number,
    sort: PropTypes.number,
  }),
  AppImageWithTextBlock: PropTypes.shape({
    content: PropTypes.string,
    headingStyle: PropTypes.string,
    imageAlignment: PropTypes.string,
    Image: PropTypes.shape({
      link: PropTypes.string,
      SilverStripeFile: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
};

export default ImageWithText;

export const query = graphql`
fragment ImageWithTextFragment on SilverStripeDataObject {
  AppPage {
    ElementalArea {
      DNADesignElementalArea {
        Elements {
          AppImageWithTextBlock {
            content
            headingStyle
            imageAlignment
            Image {
              SilverStripeFile {
                title
              }
              link
            }
          }
        }
      }
    }
  }
}
`;
