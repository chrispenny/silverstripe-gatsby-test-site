import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Block = (props) => {
  console.log(props);
  const baseElement = props.DNADesignBaseElement;
  const elementContent = props.DNADesignElementContent;

  const title = baseElement.title;
  const showTitle = baseElement.showTitle;
  const content = elementContent.html;

  return (
    <div>
      { showTitle
        ? <h2>{title}</h2>
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
  DNADesignElementContent: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export default Block;

export const query = graphql`
fragment ElementContentFragment on SilverStripeDataObject {
  AppPage {
    ElementalArea {
      DNADesignElementalArea {
        Elements {
          DNADesignElementContent {
            html
          }
        }
      }
    }
  }
}
`;
