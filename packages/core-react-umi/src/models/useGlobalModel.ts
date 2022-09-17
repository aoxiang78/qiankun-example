import { useCallback, useState } from 'react'
import { useModel } from "umi";

export default function useGlobalModel() {

  const { spaGlobalState, setSpaGlobalState } = useModel('@@qiankunStateForSlave');

  const [globalModel, setGlobalModel] = useState(spaGlobalState)

  const update = useCallback((data) => {
    setGlobalModel(data);
  }, [])

  if (spaGlobalState) {
    return {
      globalModel: spaGlobalState,
      setGlobalModel: setSpaGlobalState
    }
  }

  return {
    globalModel,
    setGlobalModel: update
  }
}
