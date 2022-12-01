import {useState} from 'react';

export function Bejelentkezes() {
	const [isLoginPending, setLoginPending] = useState(false);

	if(isLoginPending) {
		return (
			<div className='center-item'>
				<div className='spinner-border text-danger'></div>
			</div>
		);
	}

	return (
		<div className="container-fluid d-flex justify-content-center h-100 login-container">
			<div className="card login-card">
				<div className="card-header login-card-header">
					<h3>Bejelentkezés</h3>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<input type="email" name="email" className="form-control" placeholder="Email" />
						</div>
						<div className="input-group form-group">
							<input type="password" name="password" className="form-control" placeholder="Jelszó" />
						</div>
						<div className="form-group">
							<button type="submit" className="btn float-right btn-warning">
								Küldés
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);	
}