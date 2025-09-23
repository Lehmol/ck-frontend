import React from 'react';
import { ConfigProvider } from './ConfigProvider';
import { CookieProvider } from './CookieProvider';
import { AuthProvider } from './AuthProvider';
import { ApiProvider } from './ApiProvider';

const AppProvider = ({ children }) => (
	<ConfigProvider>
		<CookieProvider>
			<AuthProvider>
				<ApiProvider>{children}</ApiProvider>
			</AuthProvider>
		</CookieProvider>
	</ConfigProvider>
);
export default AppProvider;
