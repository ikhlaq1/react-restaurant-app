import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OderSummary from '../../components/Burger/OrderedSummary/OrderedSummary'
const INGREDIENT_PRICES = {
    meat: 4,
    bacon: 3,
    cheese: 3,
    salad: 2
}
export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            bacon: 0,
            cheese: 0,
            salad: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false

    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((igKey) => {
            console.log({ igKey })
            return ingredients[igKey]
        }).reduce((sum, el) => {
            console.log({ sum })
            console.log({ el })
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum > 0 })
        console.log(this.state.purchasable)

    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const addPrice = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + addPrice
        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients)
    }
    hideModal = () => {
        this.setState({ purchasing: false })
    }
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const removePrice = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice - removePrice
        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients)
    }

    render() {
        return (
            <Aux>
                <Modal
                    hide={this.hideModal}
                    show={this.state.purchasing}>
                    <OderSummary
                        totalPrice={this.state.totalPrice}
                        cancel={this.hideModal}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    updatedPrice={this.state.totalPrice}
                    ingredientAdded={this.addIngredient}
                    odered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    ingredientRemoved={this.removeIngredient}
                />
            </Aux>

        )
    }
}
