const { useState, useEffect } = React;

const EmojiSlotMachine = () => {
  const [slots, setSlots] = useState(['🤖', '🧠', '🔥']);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const slotOptions = {
    slot1: ['🤖', '🥩', '🤖', '🥩'],
    slot2: ['🧠', '🎯', '🧠', '💭'],
    slot3: ['🔥', '💥', '🔥', '⚡']
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
        slotOptions.slot2[Math.floor(Math.random() * slotOptions.slot2.length)],
        slotOptions.slot3[Math.floor(Math.random() * slotOptions.slot3.length)]
      ]);
      
      if (time >= duration) {
        clearInterval(spinInterval);
        setIsSpinning(false);
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
        React.createElement('div'
