export class ExecutorsDtoCreate {
        uuid: string
        dateExecuting: string | null
        performing: boolean
        executor: {
                getFullNameRu: string
                uuid: string
        }
}