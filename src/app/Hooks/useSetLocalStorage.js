"use client"
import { useEffect, useState } from 'react';

const PREFIX = 'FixMasters-';

function useSetLocalStorage(key, Value) {
  const prefixedKey = PREFIX + key;

  try {
    localStorage.setItem(prefixedKey, JSON.stringify(Value));
    return `success ${true}`
  } catch (error) {
    return `this error ${error}`
  }
  
}

export default useSetLocalStorage;