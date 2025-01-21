const { useState, useEffect } = React;

const EmojiSlotMachine = () => {
  const [slots, setSlots] = useState(['🤖', '🧠', '🔥']);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const slotOptions = {
    slot1: ['🤖', '🥩'],
    slot2: ['🧠'],
    slot3: ['🔥']
  };
  
  const spinSlots = () => {
    setIsSpinning(true);
    
    const duration = 2000;
    const intervals = 100;
    let time = 0;
    
    const spinInterval = setInterval(() => {
      time += intervals;
      
      setSlots([
        slotOptions.slot1[Math.floor(Math.random() * slotOptions.slot1.length)],
        slots[1],
        slots[2]
      ]);
      
      // Add visual spinning effect for all slots even if content doesn't change
      const allSlots = document.querySelectorAll('.slot-item');
      allSlots.forEach(slot => {
        slot.style.transform = `translateY(${Math.random() * 10 - 5}px)`;
      });
      
      if (time >= duration) {
        clearInterval(spinInterval);
        setIsSpinning(false);
        // Reset positions
        const allSlots = document.querySelectorAll('.slot-item');
        allSlots.forEach(slot => {
          slot.style.transform = 'translateY(0)';
        });
      }
    }, intervals);
  };

  return React.createElement('div', { 
    className: "flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg" 
  }, [
    React.createElement('h1', {
      className: "text-4xl font-bold text-red-600 mb-6 transform -rotate-2 uppercase tracking-widest text-center",
      key: "title"
    }, "✨ Step right up and take a spin! ✨"),
    React.createElement('div', {
      className: "flex gap-4 mb-8 p-6 bg-white rounded-xl shadow-lg",
      key: "slots"
    }, 
      slots.map((emoji, index) => 
        React.createElement('div', {
          key: index,
          className: `slot-item text-6xl p-4 bg-gray-50 rounded-lg border-2 border-gray-200 transition-transform ${isSpinning ? 'animate-bounce' : ''}`,
        }, emoji)
      )
    ),
    React.createElement('button', {
      onClick: spinSlots,
      disabled: isSpinning,
      className: `px-8 py-4 text-xl font-bold text-white rounded-full shadow-lg ${
        isSpinning ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
      }`,
      key: "button"
    }, isSpinning ? 'Spinning...' : 'SPIN!')
  ]);
};

ReactDOM.render(
  React.createElement(EmojiSlotMachine),
  document.getElementById('root')
);
