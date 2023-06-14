export class ExecutorsDtoCreate {
        uuid: string
        dateExecution: string | null
        performing: boolean
        executor: {
                uuid: string
                getFullNameRu: string
        }
}