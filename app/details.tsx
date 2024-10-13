import React, { useState } from 'react';
import { View } from 'react-native';
import StageOne from './stages/StageOne';
import StageTwo from './stages/StageTwo';
import StageThree from './stages/StageThree';
import StageFour from './stages/StageFour';

const MainComponent = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const handleNext = () => {
    setCurrentStage((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setCurrentStage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <View className="flex-1 bg-white justify-center p-4">
      {currentStage === 1 && <StageOne onNext={handleNext} />}
      {currentStage === 2 && <StageTwo onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStage === 3 && <StageThree onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStage === 4 && <StageFour onPrevious={handlePrevious} />}
    </View>
  );
};

export default MainComponent;
