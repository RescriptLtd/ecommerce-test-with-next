import React, { Component } from 'react';
import { func, number, string } from 'prop-types';

class QuantityUpdater extends Component {
  componentWillMount() {
    this.setState({
      qty: this.props.initialQty,
    });
  }

  render() {
    return (
      <div className="quantity-updater">
        <form
          onSubmit={e =>
            !e.preventDefault() && this.props.onUpdate(this.state.qty)
          }
        >
          <input
            type="number"
            min={this.props.minQty}
            max={this.maxQty}
            value={this.state.qty}
            onChange={(e) => {
              const qty = parseInt(e.target.value, 10) || 0;
              if (qty > this.props.maxQty || qty < this.props.minQty) return;

              this.setState({
                ...this.state,
                qty,
              });
            }}
          />
          <button>{this.props.ctaText}</button>
        </form>

        <style jsx>
          {`
            .quantity-updater {
            }
            .quantity-updater form {
              display: flex;
            }
            .quantity-updater input {
              flex: 0 1 auto;
              width: 50px;
            }
            .quantity-updater button {
              flex: 1 1 auto;
              max-width: 200px;
            }
            .quantity-updater input,
            .quantity-updater button {
              padding: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}

QuantityUpdater.defaultProps = {
  ctaText: 'Update quantity',
  initialQty: 1,
  maxQty: 1,
  minQty: 1,
  onUpdate: () => null,
};
QuantityUpdater.propTypes = {
  ctaText: string,
  initialQty: number,
  maxQty: number,
  minQty: number,
  onUpdate: func,
};

export default QuantityUpdater;
