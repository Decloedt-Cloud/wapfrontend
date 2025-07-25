import React, { useState, useEffect } from 'react';
import { 
  User, 
  Building, 
  TrendingUp, 
  Calendar, 
  Bell, 
  Settings, 
  LogOut,
  DollarSign,
  Users,
  FileText,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Edit,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [userProfile, setUserProfile] = useState({
    name: 'Jean Dupont',
    company: 'DupontTech SARL',
    email: 'jean.dupont@duponttech.fr',
    phone: '+33 6 12 34 56 78',
    address: 'Paris, France',
    avatar: null
  });

  

  // Données simulées
  const stats = [
    { label: 'Chiffre d\'affaires', value: '45 230 €', change: '+12%', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Projets actifs', value: '8', change: '+2', icon: FileText, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Clients', value: '24', change: '+5', icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Taux de conversion', value: '68%', change: '+8%', icon: TrendingUp, color: 'text-orange-600', bgColor: 'bg-orange-100' }
  ];

  const recentActivities = [
    { id: 1, type: 'success', title: 'Nouveau contrat signé', description: 'Client ABC Corp - 15 000 €', time: '2h', icon: CheckCircle },
    { id: 2, type: 'warning', title: 'Facture en attente', description: 'Facture #2024-001 - 3 500 €', time: '4h', icon: AlertCircle },
    { id: 3, type: 'info', title: 'Réunion programmée', description: 'Call client XYZ demain 14h', time: '6h', icon: Calendar },
    { id: 4, type: 'success', title: 'Paiement reçu', description: 'Virement de 8 200 € reçu', time: '1j', icon: DollarSign }
  ];

  const upcomingTasks = [
    { id: 1, title: 'Finaliser présentation client', priority: 'high', dueDate: 'Aujourd\'hui' },
    { id: 2, title: 'Appel de suivi - Projet Alpha', priority: 'medium', dueDate: 'Demain' },
    { id: 3, title: 'Révision contrat Beta', priority: 'low', dueDate: '3 jours' },
    { id: 4, title: 'Réunion équipe développement', priority: 'medium', dueDate: 'Vendredi' }
  ];

  const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} vs mois dernier
            </p>
          </div>
          <div className={`p-3 rounded-xl ${stat.bgColor}`}>
            <IconComponent className={`w-6 h-6 ${stat.color}`} />
          </div>
        </div>
      </div>
    );
  };

  const ActivityItem = ({ activity }) => {
    const IconComponent = activity.icon;
    const typeColors = {
      success: 'text-green-600 bg-green-100',
      warning: 'text-orange-600 bg-orange-100',
      info: 'text-blue-600 bg-blue-100'
    };

    return (
      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className={`p-2 rounded-lg ${typeColors[activity.type]}`}>
          <IconComponent className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
          <p className="text-sm text-gray-600">{activity.description}</p>
        </div>
        <span className="text-xs text-gray-500">{activity.time}</span>
      </div>
    );
  };

  const TaskItem = ({ task }) => {
    const priorityColors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-orange-100 text-orange-800',
      low: 'bg-green-100 text-green-800'
    };

    return (
      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex items-center space-x-3">
          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
          <div>
            <p className="text-sm font-medium text-gray-900">{task.title}</p>
            <p className="text-xs text-gray-600">{task.dueDate}</p>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[task.priority]}`}>
          {task.priority === 'high' ? 'Urgent' : task.priority === 'medium' ? 'Moyen' : 'Faible'}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-900">WAP Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userProfile.name}</p>
                  <p className="text-xs text-gray-600">{userProfile.company}</p>
                </div>
              </div>

              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Bonjour, {userProfile.name.split(' ')[0]} ! 👋</h2>
          <p className="text-gray-600 mt-1">Voici un aperçu de votre activité aujourd'hui</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Activities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Évolution du CA</h3>
                <BarChart3 className="w-5 h-5 text-gray-600" />
              </div>
              <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-end justify-center">
                <div className="flex items-end space-x-2 h-full p-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t w-8 transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Activités récentes</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Voir tout
                </button>
              </div>
              <div className="space-y-1">
                {recentActivities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tasks & Profile */}
          <div className="space-y-6">
            {/* Tasks */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Tâches à venir</h3>
                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-1">
                {upcomingTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Mon Profil</h3>
                <button className="p-1 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{userProfile.company}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{userProfile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{userProfile.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-900">{userProfile.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                  Nouveau projet
                </button>
                <button className="w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Créer facture
                </button>
                <button className="w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Ajouter client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;