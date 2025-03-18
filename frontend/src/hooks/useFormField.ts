import { useStandardFormStore } from "@/stores/standardFormStore"
import { Field } from "@/types"

export const useFormField = () => {
    const { addField, removeField } = useStandardFormStore.getState()

    const add = (field: Field) => {
        addField(field)
    }

    const remove = (id: number) => {
        removeField(id)
    }

    return {
        add,
        remove
    }
}