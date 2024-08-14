// /app/dashboard/create/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Stepper from '@/app/components/Stepper';
import CreateStep from '@/app/components/CreateStep';
import CreateFlashcard from '@/app/components/createFlashcard';

export default function CreateFlashcardPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [deckName, setDeckName] = useState<string | null>(null);

  useEffect(() => {
    const userIdFromUrl = searchParams.get('userId');
    setUserId(userIdFromUrl);
    console.log('userId in CreateFlashcardPage:', userIdFromUrl);
  }, [searchParams]);

  return (
    <div className="h-full p-6 overflow-y-auto flex-grow flex flex-col gap-4 items-center justify-center bg-slate-50">
      <div className="w-11/12 max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />

        {activeStep === 0 && <CreateStep userId={userId} setDeckName={setDeckName} />} 
        {activeStep === 1 && <CreateFlashcard deckName={deckName} />}
      </div>
    </div>
  );
}
