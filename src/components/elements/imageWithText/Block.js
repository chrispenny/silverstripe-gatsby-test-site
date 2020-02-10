import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from "gatsby";

const Block = (props) => {
  const baseElement = props.DNADesignBaseElement;
  const imageWithText = props.AppImageWithTextBlock;

  const title = baseElement.title;
  const showTitle = baseElement.showTitle;

  const content = imageWithText.content;
  const headingStyle = imageWithText.headingStyle;
  const imageAlignment = imageWithText.imageAlignment;

  return (
    <div>
      { showTitle
        ? <h2>{title} {headingStyle} {imageAlignment}</h2>
        : null }

      <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
  )
};

Block.defaultProps = {};

Block.propTypes = {
  uuid: PropTypes.string,
  className: PropTypes.string,
  DNADesignBaseElement: PropTypes.shape({
    title: PropTypes.string,
    showTitle: PropTypes.string,
    sort: PropTypes.string,
  }),
  AppImageWithTextBlock: PropTypes.shape({
    content: PropTypes.string,
    headingStyle: PropTypes.string,
    imageAlignment: PropTypes.string,
  }),
};

export default Block;

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
          }
        }
      }
    }
  }
}
`;
