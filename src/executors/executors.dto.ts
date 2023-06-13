export class ExecutorsDtoCreate {
        uuid: string
        dateExecuting: string | null
        performing: boolean
        executor: {
                uuid: string
                getFullNameRu: string
        }
}