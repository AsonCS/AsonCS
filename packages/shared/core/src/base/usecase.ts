export default interface Usecase<IN, OUT> {
	execute(input: IN): Promise<OUT>
}
