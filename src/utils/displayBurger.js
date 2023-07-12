export const displayBurger = ({ lettuce, bacon, cheese, meat }) => {
  let burger = [];
  for (let i = 0; i < lettuce; i++) {
    burger.push(<div key={burger.length} className="lettuce"></div>);
  }
  for (let i = 0; i < bacon; i++) {
    burger.push(<div key={burger.length} className="bacon"></div>);
  }
  for (let i = 0; i < cheese; i++) {
    burger.push(<div key={burger.length} className="cheese"></div>);
  }
  for (let i = 0; i < meat; i++) {
    burger.push(<div key={burger.length} className="meat"></div>);
  }
  if (burger.length === 0) {
    burger.push(<h2 key="0">No Ingredients Added</h2>);
  }

  return burger;
};
