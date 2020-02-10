import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Block = () => (
  null
);

Block.defaultProps = {};

Block.propTypes = {
  uuid: PropTypes.string,
  className: PropTypes.string,
  DNADesignBaseElement: PropTypes.shape({
    title: PropTypes.string,
    showTitle: PropTypes.string,
    sort: PropTypes.string,
  }),
};

export default Block;

export const query = graphql`
fragment BaseElementFragment on SilverStripeDataObject {
  AppPage {
    ElementalArea {
      DNADesignElementalArea {
        Elements {
          uuid
          className
          DNADesignBaseElement {
            title
            showTitle
            sort
          }
        }
      }
    }
  }
}
`;
