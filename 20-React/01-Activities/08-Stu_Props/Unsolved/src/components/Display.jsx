import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function Display() {
  return (
  <div>

<Card {...feline}> </Card>

  <Card 
  id={feline.id} 
  name={feline.name} 
  description={feline.description} 
  />

  </div>
  

  
  );
}
