import CombinerBurger from '../Components/styles/burger.styled';

export const displayBurger = ({ lettuce, bacon, cheese, meat }) => {
  let burger = [];
  for (let i = 0; i < lettuce; i++) {
    burger.push(
      <CombinerBurger.StyledLettuce
        key={burger.length}
      ></CombinerBurger.StyledLettuce>,
    );
  }
  for (let i = 0; i < bacon; i++) {
    burger.push(
      <CombinerBurger.StyledBacon
        key={burger.length}
      ></CombinerBurger.StyledBacon>,
    );
  }
  for (let i = 0; i < cheese; i++) {
    burger.push(
      <CombinerBurger.StyledCheese
        key={burger.length}
      ></CombinerBurger.StyledCheese>,
    );
  }
  for (let i = 0; i < meat; i++) {
    burger.push(
      <CombinerBurger.StyledMeat
        key={burger.length}
        className="meat"
      ></CombinerBurger.StyledMeat>,
    );
  }
  if (burger.length === 0) {
    burger.push(<h2 key="0">No Ingredients Added</h2>);
  }

  return burger;
};
