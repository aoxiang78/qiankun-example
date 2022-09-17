import { useCallback, useState } from 'react'
import { useModel } from "@@/plugin-model/useModel";

export default function useGlobalModel() {

  const spaGlobalState = useModel('@@qiankunStateFromMaster');

  const [globalModel, setGlobalModel] = useState({})

  const update = useCallback((data) => {
    setGlobalModel(data);
  }, [])

  if (spaGlobalState) {
    return {
      globalModel: spaGlobalState.spaGlobalState,
      setGlobalModel: spaGlobalState.setSpaGlobalState
    }
  }

  return {
    globalModel,
    setGlobalModel: update
  }
}
